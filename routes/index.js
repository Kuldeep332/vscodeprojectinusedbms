var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET home page. */
// var floader=files;
const folder='files';
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  fs.readdir( `./${folder}`,{withFileTypes:true},function(err,file){
    // console.log(file.isDirectory());
    // res.send(file[0].isDirectory())
    res.render("index",{file,folder})
  })
});

router.get(`/closeback`,function(req,res,next){
  res.redirect('back')
})
router.get(`/abc`,function(req,res){
  fs.writeFile(`./${folder}/${req.query.o}`,"",function(err){
    res.redirect('/')
  })
})
router.get(`/abcd`,function(req,res){
  fs.mkdir(`./${folder}/${req.query.o1}`,function(err){
    res.redirect('/')
  })
})
router.get(`/delete/file/:filename`,function(req,res){
fs.unlink(`./${folder}/${req.params.filename}`,function(err){
  res.redirect('/')
})
})
router.get(`/delete/folder/:filename`,function(req,res){
  fs.rmdir(`./${folder}/${req.params.filename}`,function(err){
    res.redirect('/')
  })
  })
  router.get('/newpage/:filename', function(req, res, next) {
    // res.send('respond with a resource');
    fs.readdir( `./${folder}`,{withFileTypes:true},function(err,file){
      // console.log(file.isDirectory());
      // res.send(file[0].isDirectory())
      fs.readFile(`./${folder}/${req.params.filename}`,'utf-8',function(err,data){
        res.render("newpage",{file,folder,filename:req.params.filename,data})
        console.log(data);
  
      })
    });
    })

module.exports = router;
// fs.mkdir(path, mode, callback)
router.get(`/read`,function(req,res,next){
  const read1=fs.readFileSync('./files/a','utf-8')
  console.log(read1);
  res.send(read1);
  
})
router.get(`/abc1`,function(req,res){
  fs.writeFile(`./${folder}/${req.query.o}`,"",function(err){
    res.render("newpage")
  })
})
router.get(`/abcd1`,function(req,res){
  fs.mkdir(`./${folder}/${req.query.o1}`,function(err){
    res.render("newpage")
  })
})