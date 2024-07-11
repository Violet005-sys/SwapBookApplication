
const booksData = [{
    "user": {
      "$oid": "6672845efc13ae6f152344fe"
    },
    "title": "Mr",
    "author": "Mrs",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "rating": 2,
    "personalComments": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book2.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f152344ff"
    },
    "title": "Rev",
    "author": "Rev",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "rating": 4,
    "personalComments": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book3.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234500"
    },
    "title": "Honorable",
    "author": "Rev",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "rating": 1,
    "personalComments": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book2.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234501"
    },
    "title": "Mr",
    "author": "Mrs",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "rating": 2,
    "personalComments": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book3.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234502"
    },
    "title": "Rev",
    "author": "Mr",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "rating": 3,
    "personalComments": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book3.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234503"
    },
    "title": "Mr",
    "author": "Ms",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "rating": 2,
    "personalComments": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book2.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234504"
    },
    "title": "Mrs",
    "author": "Mrs",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
    "rating": 4,
    "personalComments": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book1.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234505"
    },
    "title": "Mrs",
    "author": "Rev",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "rating": 2,
    "personalComments": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book3.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234506"
    },
    "title": "Mr",
    "author": "Ms",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "rating": 1,
    "personalComments": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book3.jpg"
  }, {
    "user": {
      "$oid": "6672845efc13ae6f15234507"
    },
    "title": "Dr",
    "author": "Mr",
    "genre": "error: undefined method `first' for nil:NilClass",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "rating": 1,
    "personalComments": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "statusOfBook": "error: undefined method `first' for nil:NilClass",
    "stateOfBook": "error: undefined method `first' for nil:NilClass",
    "image": "https://example.com/book3.jpg"
  }];

  module.exports = booksData;