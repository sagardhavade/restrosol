const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv/config')

const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

// Middleware
app.use(cors())
app.options('*', cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(morgan('tiny'))

// Serve static files (if needed)
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

// JWT authentication middleware
// app.use(authJwt())

// Error handler middleware (if needed)
// app.use(errorHandler)

const api = process.env.API_URL
const categoriesRoute = require('./routes/categories')
const productRoute = require('./routes/products')
const userRoute = require('./routes/users')
const orderRoute = require('./routes/orders')
const contactListRoute = require('./routes/contactList') // Import the contactList routes
const jobPostRoute = require('./routes/jobPost.js')
const resumeRoute = require('./routes/resume.js')
const testomonialRoute = require('./routes/testomonial.js')
const achievementRoute = require('./routes/achievement.js')
const blogRoute = require('./routes/blog.js')
const gallaryRoute = require('./routes/gallary.js')
const formRoute = require('./routes/form.js')
const contactRoute = require('./routes/contact.js')

// Routes
app.use(`${api}/products`, productRoute)
app.use(`${api}/categories`, categoriesRoute)
app.use(`${api}/users`, userRoute)
app.use(`${api}/orders`, orderRoute)
app.use(`${api}/contactList`, contactListRoute) // Use the contactList routes
app.use(`${api}/jobpost`, jobPostRoute) // Use the contactList routes
app.use(`${api}/resume`, resumeRoute) // Use the contactList routes
app.use(`${api}/achievement`, achievementRoute) // Use the contactList routes
app.use(`${api}/blog`, blogRoute) // Use the contactList routes
app.use(`${api}/gallary`, gallaryRoute) // Use the contactList routes
app.use(`${api}/form`, formRoute) // Use the contactList routes
app.use(`${api}/contact`, contactRoute) // Use the contactList routes
app.use(`${api}/testomonial`, testomonialRoute) // Use the contactList routes

const dbConfig = require('./config/database.config.js')

mongoose.Promise = global.Promise

// Connecting to the database
mongoose
  .connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    family: 4
  })
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
  })

// Listen for requests
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
