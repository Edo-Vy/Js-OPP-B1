// Khai báo prototype sinh viên. Kiểu dữ liệu object SinhVien
function SinhVien(){ // this. đại diện cho function

    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.diemToan = '';
    this.diemVan = '';
    tinhDiemTB = function () {

        var output = 0;
        output = (Number(this.diemToan) + Number(this.diemVan)) / 2;
        return output;
    };
    xepLoai = function () {

        //input : DTB : number ( DTB >= 5: đậu ; DTB < 5 : rớt)
        var diemTB = this.tinhDiemTB();
        //output : loaiSV : String
        var loaiSv = '';
        if (diemTB >= 5) {

            loaiSv = 'Đậu';
        } else {
            loaiSv = 'Rớt';
        }
        return loaiSv;

    }
    
}

// Khi báo đối tượng prototype dùng từ khóa new

var sinhVien1 = new SinhVien(); // instance - object - đối tượng : thể hiện từ prototype
console.log(sinhVien1);