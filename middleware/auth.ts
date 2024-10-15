import { useUser } from "@/composables/auth/user";
const { isLoggedIn } = useUser();
const router = useRouter();

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('i am called')
  // If the user is not logged in and trying to access any route other than "/login" or the root "/", redirect to "/login"
  if (!isLoggedIn.value && to.path !== "/login" && to.path !== "/") {
    return router.push("/login");
  }

  // If the user is logged in and trying to access the login page or the root "/", redirect them to "/dashboard"
  if (isLoggedIn.value && (to.path === "/login" || to.path === "/")) {
    return router.push("/dashboard");
  }

  // Allow access to all other routes for logged-in users
});
