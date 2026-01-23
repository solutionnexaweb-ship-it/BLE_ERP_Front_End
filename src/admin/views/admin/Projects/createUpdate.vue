<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <!-- Header Section -->
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <div
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 bg-emerald-500 w-32 h-32 flex items-center justify-center"
            >
              <i class="fas fa-project-diagram text-white text-5xl"></i>
            </div>
          </div>
        </div>
        <div class="w-full px-4 text-center mt-20">
          <h3 class="text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
            Create New Project
          </h3>
          <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <i class="fas fa-building mr-2 text-lg text-blueGray-400"></i>
            Best Lanka Construction ERP
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="mt-6 mb-4">
        <div class="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded relative">
          <i class="fas fa-check-circle mr-2"></i>
          <span class="font-bold">Success!</span>
          <span class="block sm:inline"> {{ successMessage }}</span>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mt-6 mb-4">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <i class="fas fa-exclamation-circle mr-2"></i>
          <span class="font-bold">Error!</span>
          <span class="block sm:inline"> {{ errorMessage }}</span>
        </div>
      </div>

      <!-- Project Creation Form -->
      <div class="mt-10 py-10 border-t border-blueGray-200">
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-wrap">
            
            <!-- Project Code -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="projectCode"
                >
                  Project Code <span class="text-red-500">*</span>
                </label>
                <input
                  id="projectCode"
                  type="text"
                  v-model="formData.projectCode"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="e.g., PROJ001"
                />
              </div>
            </div>

            <!-- Project Name -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="projectName"
                >
                  Project Name <span class="text-red-500">*</span>
                </label>
                <input
                  id="projectName"
                  type="text"
                  v-model="formData.projectName"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="e.g., Highway Construction"
                />
              </div>
            </div>

            <!-- Location -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location <span class="text-red-500">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  v-model="formData.location"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="e.g., Colombo"
                />
              </div>
            </div>

            <!-- Project Type -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="projectType"
                >
                  Project Type <span class="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  v-model="formData.projectType"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option value="">Select Project Type</option>
                  <option value="SHEET_PILLING">Sheet Pilling</option>
                  <option value="FOUNDATION">Foundation</option>
                  <option value="BUILDING">Building</option>
                  <option value="ROAD">Road Construction</option>
                  <option value="BRIDGE">Bridge Construction</option>
                  <option value="RESIDENTIAL">Residential</option>
                  <option value="COMMERCIAL">Commercial</option>
                </select>
              </div>
            </div>

            <!-- Start Date -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="startDate"
                >
                  Start Date <span class="text-red-500">*</span>
                </label>
                <input
                  id="startDate"
                  type="date"
                  v-model="formData.startDate"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />

              </div>
            </div>

            <!-- End Date -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="endDate"
                >
                  End Date <span class="text-red-500">*</span>
                </label>
                <input
                  id="endDate"
                  type="date"
                  v-model="formData.endDate"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />

              </div>
            </div>

            <!-- Employee ID -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="employeeId"
                >
                  Project Manager (Employee ID) <span class="text-red-500">*</span>
                </label>
                <input
                  id="employeeId"
                  type="number"
                  min="1"
                  v-model.number="formData.employeeId"
                  required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="e.g., 123"
                />

              </div>
            </div>

            <!-- Estimate Budget -->
            <div class="w-full lg:w-6/12 px-4 mb-6">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="estimateBudget"
                >
                  Estimate Budget (Optional)
                </label>
                <input
                  id="estimateBudget"
                  type="number"
                  step="0.01"
                  v-model.number="formData.estimatedBudget"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="e.g., 50000"
                />
              </div>
            </div>

          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap justify-center mt-6">
            <div class="w-full lg:w-9/12 px-4">
              <div class="flex gap-4">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 flex-1"
                  :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                >
                  <i class="fas fa-save mr-2"></i>
                  {{ isSubmitting ? 'Creating...' : 'Create Project' }}
                </button>
                
                <button
                  type="button"
                  @click="resetForm"
                  :disabled="isSubmitting"
                  class="bg-blueGray-500 text-black active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                >
                  <i class="fas fa-redo mr-2"></i>
                  Reset
                </button>
              </div>
            </div>
          </div>

        </form>
      </div>

      <!-- Created Project Display -->
      <div v-if="createdProject" class="mt-6 py-6 border-t border-blueGray-200">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <h4 class="text-xl font-semibold text-blueGray-700 mb-4">
              <i class="fas fa-check-circle text-emerald-500 mr-2"></i>
              Project Created Successfully
            </h4>
            <div class="bg-blueGray-100 rounded-lg p-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-bold text-blueGray-600">Project ID:</span>
                  <span class="ml-2 text-blueGray-700">{{ createdProject.id }}</span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">Project Code:</span>
                  <span class="ml-2 text-blueGray-700">{{ createdProject.projectCode }}</span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">Project Name:</span>
                  <span class="ml-2 text-blueGray-700">{{ createdProject.projectName }}</span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">Location:</span>
                  <span class="ml-2 text-blueGray-700">{{ createdProject.location }}</span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">Type:</span>
                  <span class="ml-2 text-blueGray-700">{{ formatProjectType(createdProject.projectType) }}</span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">Status:</span>
                  <span class="ml-2 px-2 py-1 bg-emerald-500 text-white rounded text-xs">
                    {{ createdProject.status }}
                  </span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">Start Date:</span>
                  <span class="ml-2 text-blueGray-700">{{ formatDate(createdProject.startDate) }}</span>
                </div>
                <div>
                  <span class="font-bold text-blueGray-600">End Date:</span>
                  <span class="ml-2 text-blueGray-700">{{ formatDate(createdProject.endDate) }}</span>
                </div>
              </div>
              
              <div class="mt-4 flex gap-2">
                <button
                  @click="viewAllProjects"
                  class="bg-blue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                >
                  <i class="fas fa-list mr-2"></i>
                  View All Projects
                </button>
                <button
                  @click="createAnother"
                  class="bg-emerald-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                >
                  <i class="fas fa-plus mr-2"></i>
                  Create Another
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { createProject } from "@/api/projectService";

export default {
  name: "ProjectCreate",

  data() {
    return {
      formData: {
        projectCode: "",
        projectName: "",
        location: "",
        projectType: "",
        startDate: "",
        endDate: "",
        employeeId: null,
        estimatedBudget: null,
      },
      isSubmitting: false,
      successMessage: "",
      errorMessage: "",
      createdProject: null,
    };
  },

  methods: {
    async handleSubmit() {
      this.successMessage = "";
      this.errorMessage = "";
      this.isSubmitting = true;

      try {
        if (this.formData.endDate <= this.formData.startDate) {
          this.errorMessage = "End date must be after start date";
          return;
        }

        //  BACKEND PAYLOAD
        const payload = {
          projectCode: this.formData.projectCode.trim(),
          projectName: this.formData.projectName.trim(),
          location: this.formData.location.trim(),
          projectType: this.formData.projectType,
          startDate: this.formData.startDate, 
          endDate: this.formData.endDate,   
          employee: {
            id: this.formData.employeeId,
          },
          estimatedBudget: this.formData.estimatedBudget,
        };

        console.log("Submitting payload:", payload);

        const response = await createProject(payload);

        this.createdProject = response.data;
        this.successMessage = `Project "${response.data.projectName}" created successfully`;

        this.resetForm();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error(error);

        if (error.response?.data?.message) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = "Failed to create project";
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.formData = {
        projectCode: "",
        projectName: "",
        location: "",
        projectType: "",
        startDate: "",
        endDate: "",
        employeeId: null,
        estimatedBudget: null,
      };
    },

    viewAllProjects() {
      this.$router.push("/admin/tables");
    },
  },
};
</script>
