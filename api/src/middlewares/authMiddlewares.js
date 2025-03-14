import { StatusCodes } from "http-status-codes"
import { env } from "~/config/environment"
import { JwtProvider } from "~/providers/JwtProvider"
import ApiError from "~/utils/ApiError"

// Middleware authenticate jwt accessToken
const isAuthorized = async (req, res, next) => {

  let clientToken = req.cookies?.accessToken || req.headers?.authorization

  if (!clientToken) {
    return next(new ApiError(StatusCodes.UNAUTHORIZED, 'Unauthorized (Token not found)'))
  }

  if (clientToken.startsWith('Bearer ')) {
    clientToken = clientToken.split(' ')[1]
  }

  try {
    // Verify token
    const accessTokenDecoded = await JwtProvider.verifyToken(clientToken, env.ACCESS_TOKEN_SECRET_SIGNATURE)


    req.jwtDecoded = accessTokenDecoded

    next()
  } catch (error) {
    const errorMessage = error?.message || ''

    if (errorMessage.includes('jwt expired')) {
      return next(new ApiError(StatusCodes.GONE, 'Access Token is expired'))
    }

    next(new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid Token'))
  }
}

export const authMiddlewares = {
  isAuthorized
}
