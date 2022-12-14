import axios from "axios";

const API_URL = "http://127.0.0.1:5003";

export const Helpers = {
    getUser: () => {
        const checkLocalStorage = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
        if (checkLocalStorage) {
            const user = JSON.parse(checkLocalStorage);
            return user;
        }

        return null;
    },

    getToken: () => {
        const checkLocalStorage = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
        if (checkLocalStorage) {
            const user = JSON.parse(checkLocalStorage);
            return user.token;
        }
    },

    displayRating: (rating) => {
        let starsarr = [], color;
        for (let i = 0; i < 5; i++) {
            color = "text-gray-300";
            if (rating > i) {
                color = "text-yellow-300";
            }
            starsarr.push(<svg
                aria-hidden="true"
                className={`w-5 h-5 ${color}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>);
        }
        return starsarr;
    },

    checkIfInCart: (cartItems, productId) => {
        const found = cartItems.find(({_id}) => _id === productId);
        return found;
    },

    uploadImage: async (event) => {
        event.preventDefault();
        const image = event.target.files[0];

        if (image !== null) {
            let formData = new FormData();
            formData.append('bookCover', image);

            try {
                const res = await axios.post(`http://127.0.0.1:5003/media/upload`, formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                })
                return res.data.imageUrl;
            } catch (e) {
                throw new Error(e);
            }
        }
    },
    isAdmin: false,
    checkPermissions: async (userId, token) => {
        try {
            const res = await axios.post(`${API_URL}/users/${userId}/permissions`, {}, {
                headers: {
                    "x-access-token": token,
                },
            });
            this.isAdmin = res.data.isAdmin;
            return this.isAdmin;
        } catch (err) {
            throw new Error(err);
        }
    }
};
