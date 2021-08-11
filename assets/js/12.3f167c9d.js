(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{520:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h4",{attrs:{id:"用饿了么update组件-实现多文件上传到后台以及本地图片显示功能-大概说一下。我的业务内容是要把一个表单统一上传上去-而且其中有字段也有图片。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用饿了么update组件-实现多文件上传到后台以及本地图片显示功能-大概说一下。我的业务内容是要把一个表单统一上传上去-而且其中有字段也有图片。"}},[s._v("#")]),s._v(" 用饿了么update组件 实现多文件上传到后台以及本地图片显示功能，大概说一下。我的业务内容是要把一个表单统一上传上去，而且其中有字段也有图片。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  <div class="el-form-item-three">\n    <div class="el-form-item-dd2" v-for="arry1 in item.img" :key="arry1.id">\n      <el-form-item :label="arry1.text" prop="imageUrl" >\n        <div class="el-form-item-son">\n          <el-upload ref="upload"\n            :show-file-list="false"\n            :before-upload="beforeUpload"\n            :on-change="handleChange"\n            :auto-upload="false"\n            :file-list="fileList"\n            :data="ruleForm"\n            accept=".jpeg,.jpg,.png,.pdf"\n            >\n            <img ref="imgList" @click="imgchange(item.id,arry1.id)" :id="arry1.id" :src="arry1.image" alt="身份证">\n          </el-upload>\n        </div>\n      </el-form-item>\n    </div>\n  </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("这是一个文件上传的组件。其中 "),e("code",[s._v("auto:upload")]),s._v("要设置成不自动上传。然后"),e("code",[s._v("action")]),s._v("就不设置了，我在提交表单的时候一起上传"),e("code",[s._v("on-change")]),s._v("是要触发的函数，因为有三个表单选择，我是根据id来选择用户提交的是哪个表单\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200927175537342.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200927175453451.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzEwMDE0Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),e("h4",{attrs:{id:"因为里面的内容有少许不一样-这里还做了一个功能this-menus2-0-img-this-imgid-image-url-createobjecturl-file-raw-这个是将你当时选择的图片路劲赋值给数组中图片的路径-这样就能实现你选到了哪张图片也会在页面中显示。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#因为里面的内容有少许不一样-这里还做了一个功能this-menus2-0-img-this-imgid-image-url-createobjecturl-file-raw-这个是将你当时选择的图片路劲赋值给数组中图片的路径-这样就能实现你选到了哪张图片也会在页面中显示。"}},[s._v("#")]),s._v(" 因为里面的内容有少许不一样，这里还做了一个功能"),e("code",[s._v("this.menus2[0].img[this.imgid].image = URL.createObjectURL(file.raw)")]),s._v(" 这个是将你当时选择的图片路劲赋值给数组中图片的路径，这样就能实现你选到了哪张图片也会在页面中显示。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200927180141948.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzEwMDE0Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"这个就是显示图片的位置，以及添加了事件，当你点了你还会把本地的图片地址id传过去，这样就好将获取的上传图片地址在重新给上，这就是实现显示需要上传的图片"}})]),s._v(" "),e("p",[s._v("但是不能将"),e("code",[s._v("URL.createObjectURL(file.raw)的值赋给要提交表单中")]),s._v("，因为这个是一个bold值，本地能读取，但是无法传给后端。")]),s._v(" "),e("h5",{attrs:{id:"这里的img添加了事件是因为我要通过id来将图片放到单有的变量里-好让在后面进行处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#这里的img添加了事件是因为我要通过id来将图片放到单有的变量里-好让在后面进行处理"}},[s._v("#")]),s._v(" 这里的img添加了事件是因为我要通过id来将图片放到单有的变量里，好让在后面进行处理")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200927180855934.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzEwMDE0Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),e("h4",{attrs:{id:"这是实现后的效果。上传成功后就会把图片替换掉"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#这是实现后的效果。上传成功后就会把图片替换掉"}},[s._v("#")]),s._v(" 这是实现后的效果。上传成功后就会把图片替换掉")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200927180909143.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzEwMDE0Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200927181137204.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzEwMDE0Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),e("h4",{attrs:{id:"这个是提交的方法-根据id来判断你提交的是哪个表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#这个是提交的方法-根据id来判断你提交的是哪个表单"}},[s._v("#")]),s._v(" 这个是提交的方法，根据id来判断你提交的是哪个表单")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    submitForm(id) {\n      if (id === 0) {\n        this.URL = '/Settlement/peson'\n      } else if (id === 1) {\n        this.URL = '/Settlement/enterprise'\n      } else if (id === 2) {\n        this.URL = '/Settlement/student'\n      }\n      console.log(this.$refs.ruleForm[id])\n      /* console.log(this.URL) */\n      const formData = new FormData()\n      // 根据不同表单push不同数据\n      if (this.formid === 0) {\n        formData.append('name', this.ruleForm.name)\n        formData.append('idCard', this.ruleForm.idCard)\n        formData.append('telephone', this.ruleForm.telephone)\n        formData.append('frontPictureCard', this.data0)\n        formData.append('backPictureCard', this.data1)\n      } else if (this.formid === 1) {\n        formData.append('enterpriseName', this.ruleForm.enterpriseName)\n        formData.append('businessLicenseId', this.ruleForm.businessLicenseId)\n        formData.append('contactName', this.ruleForm.name)\n        formData.append('telephone', this.ruleForm.telephone)\n        formData.append('businessLicenseImg', this.data0)\n        formData.append('legalPersonCardImg', this.data1)\n      } else if (this.formid === 2) {\n        formData.append('studentName', this.ruleForm.name)\n        formData.append('idCard', this.ruleForm.idCard)\n        formData.append('telephone', this.ruleForm.telephone)\n        formData.append('school', this.ruleForm.school)\n        formData.append('graduationTime', this.ruleForm.graduationTime)\n        formData.append('frontPictureCard', this.data0)\n        formData.append('backPictureCard', this.data1)\n        formData.append('studentCardCover', this.data2)\n        formData.append('studentCardInfo', this.data3)\n      }\n      this.$refs.ruleForm[id].validate((valid) => {\n        if (valid) {\n          this.$http({\n            method: 'post',\n            url: this.URL,\n            data: formData,\n            headers: {\n                Authorization: JSON.parse(window.sessionStorage.getItem('loginSuccess')).token\n            }\n          }).then(res => {\n            console.log(res)\n            if (res.data.code === 20000) {\n              this.$message.success({ content: '上传成功!', duration: 2 })\n            } else if (res.data.code === 20001) {\n              this.$message.error({ content: '请勿重复提交!', duration: 2 })\n            }\n          })\n        } else {\n          alert('请填写完整信息')\n          return false\n        }\n      })\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);