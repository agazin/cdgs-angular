# CDGS UI Blank with Angular

base on Angular-cli version 1.5 or later.

## Features

1. แยกส่วนของ program เป็น module ย่อยของ app

2. shared module, เก็บรายละเอียดของสิ่งที่ใช่ร่วมกันระหว่า module

3. นำ @ngrx/platform มาใช้งาน
4. เพิ่มคลาส BaseContainer, BaseForm, BaseService, BaseTable สำหรับ สร้าง component

## การติดตั้ง 

1. ติดตั้ง node.js version 6 หรือมากกว่า

2. ติดตั้ง angular-cli เวอร์ชันตั้งแต่ 1.5 ขึ้นไปโดยคำสั่ง
```
npm install -g @angular/cli@latest หรือ yarn add --global @angular/cli@latest
```
3. clone project ด้วยคำสั่ง
```
git clone http://git.cdgs.co.th/cdgs-fw/cdgs-ui-blank.git [ชื่อโครงการ]
```
4. cd ไปที่ directory โปรเจ็ค

5. ติดตั้ง library โดยใช้คำสั่ง
```
npm install หรือ yarn
```
6. start server โดยใช้คำสั่ง 
```
npm start หรือ yarn start  
สำหรับ hmr ใช้คำสั่ง npm run hmr หรือ yarn hmr
```

## Dependencies
1. angular@5.0.2
2. primeng@5.0.0
3. bootstrap@4.0.0-beta.2
4. fullcalendar@3.7.0
5. jquery@3.2.1
6. popper.js@1.12.9
7. quill@1.3.4
8. font-awesome@4.7.0
9. 

test fork sync 
