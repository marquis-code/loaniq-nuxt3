import Swal from "sweetalert2";
const router = useRouter()

export const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
      cancelButtonText: "Nah, Just kidding",
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        router.push('/login')
        window.location.href = "/login"
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };