// Dữ liệu phim mẫu
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        genres: ["Sci-Fi", "Action", "Thriller"],
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.8,
        poster: "images/poster1.jpg"
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3,
        poster: "images/poster2.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: 9.0,
        poster: "images/poster3.jpg"
    },
    {
        id: 4,
        title: "Parasite",
        year: 2019,
        genres: ["Comedy", "Drama", "Thriller"],
        director: "Bong Joon Ho",
        actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        rating: 8.6,
        poster: "images/poster4.jpg"
    },
    {
        id: 5,
        title: "The Godfather",
        year: 1972,
        genres: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        rating: 9.2,
        poster: "images/poster5.jpg"
    },
    {
        id: 6,
        title: "Interstellar",
        year: 2014,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        director: "Christopher Nolan",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.6,
        poster: "images/poster6.jpg"
    },
    {
        id: 7,
        title: "The Matrix",
        year: 1999,
        genres: ["Action", "Sci-Fi"],
        director: "Lana & Lilly Wachowski",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        rating: 8.7,
        poster: "images/poster7.jpg"
    },
    {
        id: 8,
        title: "Forrest Gump",
        year: 1994,
        genres: ["Drama", "Romance"],
        director: "Robert Zemeckis",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        rating: 8.8,
        poster: "images/poster8.jpg"
    },
    {
        id: 9,
        title: "Avengers: Endgame",
        year: 2019,
        genres: ["Action", "Adventure", "Drama"],
        director: "Anthony & Joe Russo",
        actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        description: "After the devastating events of Avengers: Infinity War, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        rating: 8.4,
        poster: "images/poster9.jpg"
    },
    {
        id: 10,
        title: "La La Land",
        year: 2016,
        genres: ["Comedy", "Drama", "Music"],
        director: "Damien Chazelle",
        actors: ["Ryan Gosling", "Emma Stone", "John Legend"],
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        rating: 8.0,
        poster: "images/poster10.jpg"
    },
    {
        id: 11,
        title: "Spirited Away",
        year: 2001,
        genres: ["Animation", "Adventure", "Family"],
        director: "Hayao Miyazaki",
        actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        rating: 8.6,
        poster: "images/poster11.jpg"
    }
];

// State của ứng dụng
let state = {
    movies: [...movies],
    filteredMovies: [...movies],
    selectedGenres: [],
    searchQuery: "",
    sortBy: "year-desc",
    darkMode: localStorage.getItem("darkMode") === "true"
};

// DOM Elements
const moviesContainer = document.getElementById("movies-container");
const genreFiltersContainer = document.getElementById("genre-filters");
const searchInput = document.getElementById("search-input");
const movieCountElement = document.getElementById("movie-count");
const themeToggle = document.getElementById("theme-toggle");
const sortSelect = document.getElementById("sort-select");
const selectAllButton = document.getElementById("select-all");
const clearAllButton = document.getElementById("clear-all");
const movieModal = document.getElementById("movie-modal");
const closeModalButtons = document.querySelectorAll(".close-modal, .close-modal-btn");

// Khởi tạo ứng dụng
function init() {
    renderMovies();
    renderGenreFilters();
    setupEventListeners();
    updateMovieCount();
    applyDarkModePreference();
}

// Tạo placeholder chỉ khi hình ảnh không tải được
function handleImageError(img) {
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 450;
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = state.darkMode ? "#333" : "#ddd";
    ctx.fillRect(0, 0, 300, 450);
    
    ctx.fillStyle = state.darkMode ? "#666" : "#999";
    ctx.font = "60px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🎬", 150, 200);
    
    ctx.font = "16px Arial";
    ctx.fillText("Movie Poster", 150, 300);
    
    img.src = canvas.toDataURL();
}

// Hiển thị danh sách phim
function renderMovies() {
    moviesContainer.innerHTML = "";
    
    if (state.filteredMovies.length === 0) {
        moviesContainer.innerHTML = `
            <div class="no-movies">
                <i class="fas fa-film"></i>
                <h3>Không tìm thấy phim nào</h3>
                <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
        `;
        return;
    }
    
    state.filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.dataset.id = movie.id;
        
        movieCard.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" onerror="handleImageError(this)">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-genres">
                    ${movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join("")}
                </div>
            </div>
        `;
        
        movieCard.addEventListener("click", () => openMovieModal(movie.id));
        moviesContainer.appendChild(movieCard);
    });
}

// Tạo bộ lọc thể loại tự động
function renderGenreFilters() {
    // Lấy tất cả thể loại duy nhất từ dữ liệu phim
    const allGenres = [];
    movies.forEach(movie => {
        movie.genres.forEach(genre => {
            if (!allGenres.includes(genre)) {
                allGenres.push(genre);
            }
        });
    });
    
    // Sắp xếp thể loại theo thứ tự bảng chữ cái
    allGenres.sort();
    
    // Đếm số phim cho mỗi thể loại
    const genreCounts = {};
    allGenres.forEach(genre => {
        genreCounts[genre] = movies.filter(movie => 
            movie.genres.includes(genre)
        ).length;
    });
    
    // Tạo HTML cho bộ lọc
    genreFiltersContainer.innerHTML = "";
    
    allGenres.forEach(genre => {
        const checkboxContainer = document.createElement("div");
        checkboxContainer.className = "genre-checkbox";
        
        checkboxContainer.innerHTML = `
            <input type="checkbox" id="genre-${genre}" value="${genre}">
            <label for="genre-${genre}">${genre}</label>
            <span class="genre-count">${genreCounts[genre]}</span>
        `;
        
        genreFiltersContainer.appendChild(checkboxContainer);
        
        // Thêm sự kiện cho checkbox
        const checkbox = checkboxContainer.querySelector("input");
        checkbox.addEventListener("change", handleGenreFilterChange);
        
        // Đánh dấu đã chọn nếu có trong state
        if (state.selectedGenres.includes(genre)) {
            checkbox.checked = true;
        }
    });
}

// Xử lý thay đổi bộ lọc thể loại
function handleGenreFilterChange() {
    const selectedCheckboxes = document.querySelectorAll(".genre-checkbox input:checked");
    state.selectedGenres = Array.from(selectedCheckboxes).map(cb => cb.value);
    
    filterMovies();
}

// Xử lý tìm kiếm với debounce
let searchTimeout;
function handleSearchInput() {
    clearTimeout(searchTimeout);
    
    // Debounce: đợi 400ms sau khi người dùng ngừng gõ
    searchTimeout = setTimeout(() => {
        state.searchQuery = searchInput.value.trim().toLowerCase();
        filterMovies();
    }, 400);
}

// Lọc và sắp xếp phim
function filterMovies() {
    let filtered = [...movies];
    
    // Lọc theo thể loại
    if (state.selectedGenres.length > 0) {
        filtered = filtered.filter(movie => 
            state.selectedGenres.some(genre => movie.genres.includes(genre))
        );
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (state.searchQuery) {
        filtered = filtered.filter(movie => 
            movie.title.toLowerCase().includes(state.searchQuery)
        );
    }
    
    // Sắp xếp
    filtered.sort((a, b) => {
        switch (state.sortBy) {
            case "year-desc":
                return b.year - a.year;
            case "year-asc":
                return a.year - b.year;
            case "title-asc":
                return a.title.localeCompare(b.title);
            case "title-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });
    
    state.filteredMovies = filtered;
    renderMovies();
    updateMovieCount();
}

// Cập nhật số lượng phim
function updateMovieCount() {
    movieCountElement.textContent = state.filteredMovies.length;
}

// Sắp xếp phim
function handleSortChange() {
    state.sortBy = sortSelect.value;
    filterMovies();
}

// Chọn tất cả thể loại
function selectAllGenres() {
    const checkboxes = document.querySelectorAll(".genre-checkbox input");
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    state.selectedGenres = Array.from(checkboxes).map(cb => cb.value);
    filterMovies();
}

// Bỏ chọn tất cả thể loại
function clearAllGenres() {
    const checkboxes = document.querySelectorAll(".genre-checkbox input");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    state.selectedGenres = [];
    filterMovies();
}

// Mở modal chi tiết phim
function openMovieModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    
    // Điền thông tin vào modal
    document.getElementById("modal-title").textContent = movie.title;
    const modalPoster = document.getElementById("modal-poster");
    modalPoster.src = movie.poster;
    modalPoster.onerror = function() { handleImageError(this); };
    document.getElementById("modal-year").textContent = movie.year;
    document.getElementById("modal-genres").textContent = movie.genres.join(", ");
    document.getElementById("modal-director").textContent = movie.director;
    document.getElementById("modal-actors").textContent = movie.actors.join(", ");
    document.getElementById("modal-description").textContent = movie.description;
    document.getElementById("modal-rating").textContent = movie.rating;
    
    // Hiển thị sao đánh giá
    const stars = document.querySelectorAll(".stars i");
    const rating = Math.round(movie.rating / 2); // Chuyển từ 10 điểm sang 5 sao
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = "gold";
        } else {
            star.style.color = "var(--light-gray)";
        }
    });
    
    // Hiển thị modal
    movieModal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Đóng modal
function closeMovieModal() {
    movieModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Chuyển đổi chế độ sáng/tối
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    
    if (state.darkMode) {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-label").textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        document.querySelector(".theme-label").textContent = "Dark Mode";
    }
    
    // Lưu vào localStorage
    localStorage.setItem("darkMode", state.darkMode);
}

// Áp dụng chế độ đã lưu
function applyDarkModePreference() {
    if (state.darkMode) {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
        document.querySelector(".theme-label").textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        themeToggle.checked = false;
        document.querySelector(".theme-label").textContent = "Dark Mode";
    }
}

// Thiết lập sự kiện
function setupEventListeners() {
    // Tìm kiếm
    searchInput.addEventListener("input", handleSearchInput);
    
    // Sắp xếp
    sortSelect.addEventListener("change", handleSortChange);
    
    // Chọn/Bỏ chọn tất cả
    selectAllButton.addEventListener("click", selectAllGenres);
    clearAllButton.addEventListener("click", clearAllGenres);
    
    // Chế độ sáng/tối
    themeToggle.addEventListener("change", toggleDarkMode);
    
    // Modal
    closeModalButtons.forEach(button => {
        button.addEventListener("click", closeMovieModal);
    });
    
    // Đóng modal khi click ra ngoài
    movieModal.addEventListener("click", (e) => {
        if (e.target === movieModal) {
            closeMovieModal();
        }
    });
    
    // Đóng modal bằng phím ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && movieModal.style.display === "flex") {
            closeMovieModal();
        }
    });
}

// Khởi động ứng dụng khi trang đã tải xong
document.addEventListener("DOMContentLoaded", init);