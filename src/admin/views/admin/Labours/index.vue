<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Employees & Labour
          </h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            @click="loadEmployees"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Loading...' : 'Refresh' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="px-4 py-3 mx-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ errorMessage }}
    </div>

    <!-- Loading State -->
    <div v-if="isLoading && employees.length === 0" class="px-4 py-8 text-center">
      <p class="text-blueGray-500">Loading employees...</p>
    </div>

    <!-- Empty State -->
    <div v-if="!isLoading && employees.length === 0 && !errorMessage" class="px-4 py-8 text-center">
      <p class="text-blueGray-500">No employees found.</p>
    </div>

    <!-- Employees Table -->
    <div v-if="employees.length > 0" class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Employee
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Contact Info
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Type
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              ID Number
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Status
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <!-- Employee Name & Avatar -->
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <div class="flex items-center">
                <div
                  class="h-12 w-12 rounded-full border flex items-center justify-center text-white font-bold"
                  :class="getAvatarColor(employee.employeeType)"
                >
                  {{ getEmployeeInitials(employee) }}
                </div>
                <div class="ml-3">
                  <span
                    class="font-bold block"
                    :class="[
                      color === 'light' ? 'text-blueGray-600' : 'text-white',
                    ]"
                  >
                    {{ getEmployeeName(employee) }}
                  </span>
                  <span
                    class="text-xs"
                    :class="[
                      color === 'light' ? 'text-blueGray-500' : 'text-emerald-200',
                    ]"
                  >
                    ID: {{ employee.id }}
                  </span>
                </div>
              </div>
            </th>

            <!-- Contact Info -->
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div>
                <div v-if="employee.email" class="mb-1">
                  <i class="fas fa-envelope mr-2 text-blueGray-400"></i>
                  {{ employee.email }}
                </div>
                <div v-if="employee.contactNo">
                  <i class="fas fa-phone mr-2 text-blueGray-400"></i>
                  {{ employee.contactNo }}
                </div>
                <div v-if="employee.address" class="mt-1 text-blueGray-500">
                  <i class="fas fa-map-marker-alt mr-2 text-blueGray-400"></i>
                  {{ employee.address }}
                </div>
                <div v-if="!employee.email && !employee.contactNo && !employee.address" class="text-blueGray-400">
                  No contact info
                </div>
              </div>
            </td>

            <!-- Employee Type -->
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <span 
                v-if="employee.employeeType"
                class="px-2 py-1 rounded text-white font-bold"
                :class="getTypeColor(employee.employeeType)"
              >
                {{ formatEmployeeType(employee.employeeType) }}
              </span>
              <span v-else class="text-blueGray-400">N/A</span>
            </td>

            <!-- ID Number -->
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ employee.idNo || 'N/A' }}
            </td>

            <!-- Status -->
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i 
                class="fas fa-circle mr-2" 
                :class="getStatusColor(employee.status)"
              ></i>
              {{ employee.status ? employee.status.toLowerCase() : 'N/A' }}
            </td>

            <!-- Actions -->
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown :employee-id="employee.id" @refresh="loadEmployees" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="pagination && employees.length > 0" class="px-4 py-3 border-t border-blueGray-200">
      <div class="flex items-center justify-between">
        <div class="text-sm text-blueGray-500">
          Showing {{ employees.length }} of {{ pagination.totalRecords }} employees
          (Page {{ pagination.pageNumber }} of {{ pagination.totalPages }})
        </div>
        <div class="flex gap-2">
          <button
            @click="previousPage"
            :disabled="pagination.pageNumber === 1"
            class="px-3 py-1 bg-blueGray-500 text-white rounded text-xs font-bold uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            @click="nextPage"
            :disabled="pagination.pageNumber === pagination.totalPages"
            class="px-3 py-1 bg-blueGray-500 text-white rounded text-xs font-bold uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableDropdown from "@/admin/components/Dropdowns/TableDropdown.vue";
import { getLabours } from "@/api/projectService";

export default {
  name: "LabourTable",
  
  components: {
    TableDropdown,
  },

  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },

  data() {
    return {
      employees: [],
      pagination: null,
      isLoading: false,
      errorMessage: "",
      currentPage: 1,
    };
  },

  mounted() {
    this.loadEmployees();
  },

  methods: {
    async loadEmployees() {
      this.isLoading = true;
      this.errorMessage = "";

      try {
        console.log("Fetching employees from API...");
        const response = await getLabours();
        
        console.log("API Response:", response.data);

        // Handle the response wrapper from Spring Boot
        if (response.data && response.data.content) {
          // Content should be an array
          this.employees = Array.isArray(response.data.content) 
            ? response.data.content 
            : [response.data.content];
          
          // Get pagination info
          if (response.data.pagination) {
            this.pagination = response.data.pagination;
          }
        } else if (Array.isArray(response.data)) {
          this.employees = response.data;
        } else {
          this.employees = [];
        }

        console.log("Employees loaded:", this.employees.length);

      } catch (error) {
        console.error("Error loading employees:", error);
        
        if (error.response) {
          if (error.response.status === 404) {
            this.errorMessage = "API endpoint not found. Please check if the backend is running.";
          } else {
            this.errorMessage = `Error ${error.response.status}: ${error.response.data.message || error.response.statusText}`;
          }
        } else if (error.request) {
          this.errorMessage = "Cannot connect to server. Please check if the backend is running on http://localhost:8080";
        } else {
          this.errorMessage = `Error: ${error.message}`;
        }
      } finally {
        this.isLoading = false;
      }
    },

    getEmployeeName(employee) {
      if (employee.firstName && employee.lastName) {
        return `${employee.firstName} ${employee.lastName}`;
      } else if (employee.firstName) {
        return employee.firstName;
      } else if (employee.lastName) {
        return employee.lastName;
      }
      return "Unnamed Employee";
    },

    getEmployeeInitials(employee) {
      if (employee.firstName && employee.lastName) {
        return (employee.firstName[0] + employee.lastName[0]).toUpperCase();
      } else if (employee.firstName) {
        return employee.firstName.substring(0, 2).toUpperCase();
      } else if (employee.lastName) {
        return employee.lastName.substring(0, 2).toUpperCase();
      }
      return "??";
    },

    formatEmployeeType(type) {
      if (!type) return "N/A";
      // Convert LABOUR to Labour, HELPER to Helper, etc.
      return type.charAt(0) + type.slice(1).toLowerCase();
    },

    getAvatarColor(employeeType) {
      const colors = {
        'LABOUR': 'bg-blue-500',
        'HELPER': 'bg-orange-500',
        'MANAGER': 'bg-emerald-500',
        'SUPERVISOR': 'bg-purple-500',
        'ENGINEER': 'bg-indigo-500',
      };
      return colors[employeeType] || 'bg-blueGray-500';
    },

    getTypeColor(employeeType) {
      const colors = {
        'LABOUR': 'bg-blue-500',
        'HELPER': 'bg-orange-500',
        'MANAGER': 'bg-emerald-500',
        'SUPERVISOR': 'bg-purple-500',
        'ENGINEER': 'bg-indigo-500',
      };
      return colors[employeeType] || 'bg-blueGray-500';
    },

    getStatusColor(status) {
      const statusColors = {
        'ACTIVE': 'text-emerald-500',
        'INACTIVE': 'text-red-500',
        'SUSPENDED': 'text-orange-500',
        'ON_LEAVE': 'text-yellow-500',
      };
      return statusColors[status] || 'text-blueGray-500';
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadEmployees();
      }
    },

    nextPage() {
      if (this.pagination && this.currentPage < this.pagination.totalPages) {
        this.currentPage++;
        this.loadEmployees();
      }
    },
  },
};
</script>