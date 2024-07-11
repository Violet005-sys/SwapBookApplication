const express = require('express');
const router = express.Router();
const { createRequest, requestToBook, getRequest,getRequests, requestAdded, deleteRequest, updateRequest } = require('../controllers/request_controllers');

router.get('/requests-added', requestAdded);
router.post('/', createRequest);
router.post('/new-book', requestToBook);
router.get('/', getRequests);
router.get('/:id', getRequest)
router.delete('/:id', deleteRequest);
router.patch('/:id', updateRequest);


module.exports = router;
