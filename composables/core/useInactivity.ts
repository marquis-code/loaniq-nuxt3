// composables/useInactivity.ts
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export function useInactivity(timeout = 600000) { // default to 10 minutes (600,000 ms)
  const router = useRouter();
  const lastActivity = ref(Date.now());

  // Function to update the last activity time
  const updateActivity = () => {
    lastActivity.value = Date.now();
  };

  // Function to check if the user is inactive
  const checkInactivity = () => {
    if (Date.now() - lastActivity.value > timeout) {
      handleLogout();
    }
  };

  // Function to log out the user
  const handleLogout = () => {
    // Clear any user data or tokens here
    localStorage.removeItem('userToken'); // Adjust based on how you're storing user data
    router.push('/login'); // Redirect to login page
  };

  // Set up event listeners to detect user activity
  const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
  
  onMounted(() => {
    events.forEach(event => window.addEventListener(event, updateActivity));

    // Check for inactivity every 1 minute (adjust the interval as needed)
    const inactivityInterval = setInterval(checkInactivity, 60000);

    // Cleanup when the component is unmounted
    onUnmounted(() => {
      events.forEach(event => window.removeEventListener(event, updateActivity));
      clearInterval(inactivityInterval);
    });
  });
}
