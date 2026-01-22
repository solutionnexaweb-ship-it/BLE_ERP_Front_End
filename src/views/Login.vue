<template>
  <div class="login-page">
    <div class="login-card">
      <!-- Decorative Circles -->
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>

      <!-- Heading -->
      <div class="text-center mb-6">
        <h1 class="title">Welcome Back</h1>
        <p class="subtitle">Login to access your dashboard</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="userName"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="********"
            required
          />
        </div>

        <button type="submit" class="login-btn">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/api/axios";

export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.post("/auth/login", {
          userName: this.userName,
          password: this.password,
        });

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("roles", JSON.stringify(response.data.roles));

        const roles = response.data.roles;
        if (roles.includes("ROLE_ADMIN")) {
          this.$router.push("/admin/dashboard");
        } else if (roles.includes("ROLE_SITEMANAGER")) {
          this.$router.push("/sitemanager/dashboard");
        } else {
          alert("Unknown role, cannot login");
        }
      } catch (error) {
        alert(
          "Login failed: " +
            (error.response?.data?.message || error.message)
        );
      }
    },
  },
};
</script>

<style scoped>
/* =================== Body & Page =================== */
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #4f46e5, #06b6d4);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

/* =================== Card =================== */
.login-card {
  position: relative;
  background: #ffffff;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
  border-radius: 2rem;
  box-shadow: 0 25px 50px rgba(0,0,0,0.1);
  z-index: 10;
  overflow: hidden;
}

/* =================== Decorative Circles =================== */
.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  animation: float 6s ease-in-out infinite;
}
.circle1 {
  width: 200px;
  height: 200px;
  background: #6366f1;
  top: -50px;
  left: -50px;
}
.circle2 {
  width: 150px;
  height: 150px;
  background: #06b6d4;
  bottom: -50px;
  right: -50px;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(15px) rotate(15deg); }
}

/* =================== Titles =================== */
.title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}
.subtitle {
  font-size: 0.95rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

/* =================== Form =================== */
.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
}

.form-group input {
  padding: 0.65rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}
.form-group input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

/* =================== Login Button =================== */
.login-btn {
  background: linear-gradient(90deg, #4f46e5, #06b6d4);
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}
.login-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 20px rgba(0,0,0,0.2);
}
</style>
