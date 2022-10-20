

const posts = [
    {
        "userId":1,
        "posts":[
            {"id":1,"name":"Dress Mango","price":1235,"url":"https://static.invogue.ua/media/products/media/data/product-15866/IMG_6027.JPG","art":34567,"color":"blue","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":2,"name":"Skirt Zara","price":995,"url":"https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/16/295/L_g0081129516.jpg","art":23456,"color":"red","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":3,"name":"Shirt Michael Kors","price":789,"url":"https://cdn.shopify.com/s/files/1/1575/6087/products/IMG_8605_1900x.jpg?v=1652181833","art":23456,"color":"grey","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":4,"name":"Pants Intertop","price":985,"url":"https://cdn.shopify.com/s/files/1/0921/1242/products/LucyParisLabel03.23.20211078_2333x.jpg?v=1629327400","art":1234,"color":"yellow","addFavorites":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":5,"name":"Jeans Mango","price":789,"url":"https://bonlook.ua/image/cache/catalog/marella/f6/f6968c58-331a-11ec-8dcf-000c29ac654d-490x635.jpg","art":6543,"color":"blue","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":6,"name":"T-shirt Tezenis","price":765,"url":"https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/b/a/basic_red_tee1.jpg","art":45673,"color":"red","hasBackground":true,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":7,"name":"Dress Zara","price":1234,"url":"https://cdn.shopify.com/s/files/1/0002/8783/4131/products/Untitled-1_0000_IMG_7167_981x.jpg?v=1655110789","art":43568,"color":"purple","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":8,"name":"Skirt Bershka","price":1205,"url":"https://cdn.shopify.com/s/files/1/1689/2633/products/Kai_Top_Black_Sea_Skirt_010_edit_web_9c1d5138-b19c-4866-8485-670964124436_2048x.progressive.jpg?v=1660182701","art":8765,"color":"black","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":9,"name":"Shirt Stradivarius","price":1265,"url":"https://media.md-fashion.com.ua/images/e6/f8/74a4354305069d396747467e24cb.jpg","art":87643,"color":"white","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
            {"id":10,"name":"Pants Pull and Bear","price":1096,"url":"https://cdn.shopify.com/s/files/1/0219/4232/products/above_001_854620c4-2e4a-453f-a357-a805cb1cbe84_1024x1024.jpg?v=1655945865","art":8764,"color":"purple","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0}
        
         ]},
        
    
    {
    "userId":2,
    "posts":[
        {"id":1,"name":"Dress Mango","price":1235,"url":"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg","art":34567,"color":"blue","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
        {"id":2,"name":"Skirt Zara","price":995,"url":"https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=","art":23456,"color":"red","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
        {"id":3,"name":"Shirt Michael Kors","price":789,"url":"https://media.istockphoto.com/photos/giraffe-riding-an-elephant-on-field-friendship-and-cooperation-picture-id1349363968?b=1&k=20&m=1349363968&s=170667a&w=0&h=qa1ppsGZuM81Un7tvmClIlESWyUmm0kYkbgy09eLvuY=","art":23456,"color":"grey","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
        {"id":4,"name":"Pants Intertop","price":985,"url":"https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg","art":1234,"color":"yellow","addFavorites":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
        {"id":5,"name":"Jeans Mango","price":789,"url":"https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg","art":6543,"color":"blue","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
        {"id":6,"name":"T-shirt Tezenis","price":765,"url":"https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg","art":45673,"color":"red","hasBackground":true,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0},
        {"id":7,"name":"Dress Zara","price":1234,"url":"https://static.independent.co.uk/2022/08/12/11/bebeaa9318540d76b23769ce1e696f79Y29udGVudHNlYXJjaGFwaSwxNjYwMzgyNjA0-2.68271130.jpg?quality=75&width=982&height=726&auto=webp","art":43568,"color":"purple","hasBackground":false,"comments":[{"userIndex":0,"text":"rgr","isVisible":true},{"userIndex":1,"text":"greg","isVisible":false}],"likes":0}
      
     ]}
    
        ]
    
    
  export  const getPostsData = () => posts

 export   const addNewPostData = (post,userIndex) =>{
        posts[userIndex].posts.push(post)

return posts

    }
 export const addLikesData = (post,userIndex,index) =>{
let userPosts = posts[userIndex]

userPosts.posts.splice(index,1,post)

return userPosts.posts

 }

 export const addCommentsData = (comment,userIndex,index) =>{
    let userPosts = posts[userIndex] 
let post = userPosts.posts[index]
 post.comments.push(comment)
return post
 }
export const  deletePostData = (userIndex,index) =>{
    let userPosts = posts[userIndex]

    userPosts.posts.splice(index,1)
    

}


 