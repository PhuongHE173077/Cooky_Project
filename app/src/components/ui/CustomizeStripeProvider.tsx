import { fetchStripeKeys } from "@/src/apis"
import { useQuery } from "@tanstack/react-query"
import { StripeProvider } from "@stripe/stripe-react-native"
export default function CustomizeStripeProvider({ children }: { children: React.ReactNode }) {
  const { data: stripeKeys, isLoading, error } = useQuery({
    queryKey: ['stripe', 'user'],
    queryFn: fetchStripeKeys
  });

  if (isLoading) return null; // Có thể thay bằng loading spinner
  if (error || !stripeKeys?.publishableKey) {
    console.error("Stripe keys fetching failed:", error);
    return null;
  }

  return (
    <StripeProvider publishableKey={stripeKeys.publishableKey}>
      {children}
    </StripeProvider>
  );
}
