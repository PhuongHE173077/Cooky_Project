import { View, Text, Image, StyleSheet, Alert, Touchable, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '@/src/services/Colors'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../Button/Button'
import { PROMPT } from '@/src/services/prompt'
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { AnswerForAI, getImageByAI } from '@/src/apis'
import LoadingDialog from '../Loading/LoadingDialog'
import { TYPE_ANSWER_AI } from '@/src/services/Constant'
import { GenerateAIImage } from '@/src/services/AiGenerateImage'

export default function CreateRecipe() {
  const [userInput, setUserInput] = useState<string>('')
  const [recipeOption, setRecipeOption] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [openLoading, setOpenLoading] = useState<boolean>(false)

  const onGenerate = async () => {
    if (!userInput) {
      Alert.alert('Please enter details !')
      return;
    }
    setLoading(true)
    const result = await AnswerForAI(userInput, TYPE_ANSWER_AI.RECIPE)

    if (Array.isArray(result)) {
      setRecipeOption(result)
    }
    console.log(recipeOption);
    setLoading(false)
    actionSheetRef.current?.show();

  }

  const generateCompleteRecipe = async (option: any) => {
    actionSheetRef.current?.hide()
    // setOpenLoading(true)
    const PROMPTC = option.recipeName + 'Description' + option.description + PROMPT.GENERATE_COMPLETE_RECIPE
    const result = await AnswerForAI(PROMPTC, TYPE_ANSWER_AI.RECIPE_DETAIL)
    await GenerateRecipeImage(result?.imagePrompt)

    setOpenLoading(false)

  }

  const GenerateRecipeImage = async (imaPrompt: string) => {
    const result = await getImageByAI(imaPrompt)
    console.log("🚀 ~ GenerateRecipeImage ~ result:", result)

  }
  return (
    <View
      style={styles.container}
    >
      <Image source={require('../../assets/images/pan.gif')}
        style={styles.panImage}
      />
      <Text style={styles.heading}>Cooky now !</Text>
      <Text style={styles.subHeading}>Make some things for you LOVE !</Text>

      <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={3}
        placeholder='what want to create ? Add ingredients etc... '
        onChangeText={(text) => setUserInput(text)}
      />

      <Button lable='Generate Recipe'
        onPress={() => onGenerate()}
        loading={loading}
        icon={'sparkles'} />
      <LoadingDialog visible={openLoading} />

      <ActionSheet ref={actionSheetRef}>

        <View style={styles.actionShetContainer}>
          <Text style={styles.heading}>Hi, I am here.</Text>
          <View>
            {recipeOption && recipeOption.map((item: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => generateCompleteRecipe(item)}
                style={styles.recipeOptionConatiner}>
                <Text
                  style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 16
                  }}
                >{item?.recipeName}</Text>
                <Text
                  style={{
                    fontFamily: 'outfit',
                    fontSize: 16,
                    color: Colors.GRAY
                  }}
                >{item?.description}</Text>
              </TouchableOpacity>

            ))}

          </View>
        </View>

      </ActionSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center'
  },
  panImage: {
    width: 80,
    height: 80
  },
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  subHeading: {
    fontFamily: 'outfit',
    fontSize: 16,
    marginTop: 6
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    borderRadius: 15,
    height: 120,
    marginTop: 8,
    padding: 15,
    textAlignVertical: 'top'
  },
  actionShetContainer: {
    padding: 25
  },
  recipeOptionConatiner: {
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 15,
    marginTop: 15
  }
})