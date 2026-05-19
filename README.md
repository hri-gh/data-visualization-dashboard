# Data Visualization Dashboard
An interactive data visualization dashboard built with Next.js, MongoDB, and Recharts.

The dashboard visualizes insights from a JSON dataset using multiple charts and supports dynamic filtering across sectors, topics, countries, years, and more.

## Tech Stack

- Next.js 15
- TypeScript
- MongoDB
- MongoDB Native Driver
- Recharts
- Tailwind CSS
- shadcn/ui


## Features

- Interactive analytics dashboard
- Dynamic filtering system
- Multiple chart visualizations
- MongoDB aggregation pipelines
- URL-based filter state management
- Responsive dashboard layout
- Server-side data fetching


## Visualizations

- Average Intensity by Sector (Horizontal Bar Chart)
- Topic Distribution (Donut Chart)
- Relevance Over Years (Line Chart)
- Top Countries by Relevance (Bar Chart)
- Sector Performance Analysis (Radar Chart)


## Dashboard Filters

- End Year
- Topic
- Sector
- Region
- PESTLE
- Source
- SWOT
- Country


## Installation

- Downoad the zip and unzip the file
- Open the terminal and run the following commands:

```bash
npm install
```

---

# Environment Variables

```md id="rmd8"
## Environment Variables
```
Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```
---

# Database Seeding

VERY important because assignment reviewer may run it.

Example:

```md id="rmd9"
## Seed Database
```
Run the following command to seed the MongoDB database:

```bash
npm run seed
```

---

# Run Project

```md id="rmd10"
## Run Development Server
```
```bash
npm run dev
```
Open: http://localhost:3000


---

# 8. API Endpoints

This is GOOD because assignment explicitly asked APIs.

Example:

```md id="rmd11"
## API Endpoints
```
### Get Dashboard Data

```txt
GET /api/dashboard
```

### Get Dashboard Filters
```txt
GET /api/dashboard/filters
```


---

# 9. Folder Structure (Optional but GOOD)

Keep SHORT.

Example:

```md id="rmd12"
## Project Structure
```
```txt
src/
├── app/
├── components/
├── services/
├── lib/
├── scripts/
├── types/
```

## Live Demo

[View Live Project](https://your-project-url.vercel.app)
