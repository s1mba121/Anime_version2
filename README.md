# AnimeStream (Unfinished Anime Streaming Website)

This project is an anime streaming website developed using the Django framework. The main functionality, including anime playback through integration with the Anilibria API and a working video player, was successfully implemented. However, due to the team's dissolution, further development was halted.

## Key Features

- **Integration with the Anilibria API**: Fetches anime data, including descriptions, posters, genres, and video links.
- **Anime Playback**: A fully functional embedded player for watching anime directly on the website.
- **User Authentication**: Includes user registration and login functionality.
- **Basic User Profile**: A user dashboard is implemented but lacks features like saving favorites.

## Current State of the Project

The team consisted of:
- 2 Fullstack developers.
- 1 designer.

While the core features were implemented, the project remains incomplete and does not include several planned functionalities. It can, however, serve as a foundation for further development.

### Features Implemented
- Integration with the Anilibria API.
- A working video player for anime streaming.
- User registration and login.
- Basic user dashboard.

### Features Not Implemented
- Saving and managing favorite anime.
- A commenting and rating system.
- Comprehensive UI/UX design.
- Search and recommendation systems.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Set up a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/MacOS
   venv\Scripts\activate     # For Windows
   pip install -r requirements.txt
   ```

3. Configure environment variables:
   Create a `.env` file and add necessary configurations, including the API key for Anilibria.

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Run the development server:
   ```bash
   python manage.py runserver
   ```

6. Access the website at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

## Technologies Used

- **Backend**: Django
- **Frontend**: HTML, CSS, JavaScript
- **Integration**: Anilibria API

## Potential Improvements

Despite its unfinished status, the project can be further developed to include:
- Advanced user profile features, such as saving and organizing favorite anime.
- A search bar and personalized recommendations.
- A commenting and rating system for user engagement.
- A responsive and visually appealing user interface.

---

*This project is provided "as is" and does not claim to be complete. Use the code at your own risk.*
