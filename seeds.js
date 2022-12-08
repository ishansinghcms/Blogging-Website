const mongoose = require("mongoose"),
      Blog = require("./models/blog"); 
      Comment = require("./models/comment");
let data = 
[
    {
        name: "Maldives",
        image: "https://image.cnbcfm.com/api/v1/image/106616793-1594805802117gettyimages-900809876.jpg?v=1594864515",
        description: "The Republic of the Maldives is an island nation in the Indian Ocean."
    },    
    {
        name: "Greece",
        image: "https://www.touropia.com/gfx/d/best-greek-islands/crete.jpg?v=1",
        description: "Greece has the longest coastline in Europe and is the southernmost country in Europe. The mainland has rugged mountains, forests, and lakes, but the country is well known for the thousands of islands dotting the blue Aegean Sea to the east, the Mediterranean Sea to the south, and the Ionian Sea to the west."
    },    
    {
        name: "Tokyo",
        image: "https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg",
        description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens"
    },    
    {
        name: "Swizerland",
        image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto",
        description: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails."
    },    
    {
        name: "Ukraine",
        image: "https://media.istockphoto.com/photos/kiev-ukraine-vozdvyzhenka-barrio-in-historical-city-center-picture-id1155533025",
        description: "Ukraine is a country in Eastern Europe. It is the second-largest country in Europe after Russia, which it borders to the east and north-east"
    },    
    {
        name: "Hong Kong",
        image: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/01/19/6495576a-5944-11eb-a99a-beae699a1a1d_image_hires_154608.jpeg?itok=GjeMy9Et&v=1611042381",
        description: "Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a metropolitan area and special administrative region of China on the eastern Pearl River Delta in South China."
    },    
    {
        name: "Kerala",
        image: "https://static.toiimg.com/thumb/76405061/kerala.jpg?width=1200&height=900",
        description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers."
    },    
    {
        name: "Leh",
        image: "https://cdn1.goibibo.com/voy_ing/t_fs/jammu-and-kashmir-leh-148140378385o.jpeg",
        description: "Leh was an important stopover on trade routes along the Indus Valley between Tibet to the east, Kashmir to the west and also between India and China for centuries."
    }    
    
]

function seedDB()
{   
    Blog.remove({} , function(error)
    {   
        if(error)
        {
            console.log(error);
        }
        console.log("removed blog");
        // data.forEach(function(s)
        // {
        //     Blog.create(s , function(error , data)
        //     {
        //         if(error){console.log(error);}
        //         else
        //         {
        //             console.log("added a blog")
        //             Comment.create(
        //             {
        //                 text: "Beautiful picture!",
        //                 author: "Harry"
        //             } , function(error , commentX)
        //                 {
        //                     if(error){console.log(error);}
        //                     else
        //                     {
        //                         data.comments.push(commentX);
        //                         data.save();
        //                         console.log("created new comment")
        //                     }
        //                 })
        //         }
        //     })
        // })
    });
}
module.exports = seedDB;