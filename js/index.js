// --- Lập trình hướng đối tượng OOP -------------------

/** =====  Tính chất hướng đối tượng
 *          + Tường minh về mặt ngữ nghĩa ( đưa biến và hàm về đúng vị trí của nó )
 *          + Tính đóng gói : Biến  của đối tượng nào thì phải thông qua đối tượng đó mới truy xuất được
 * 
 */
// Khai báo biến đối tượng ( object) { key : value}

// var hocVien = { // dấu scope

//     hoTen: 'Nguyễn Văn A',
//     soDienThoai: '0909808',
//     email: '1234@gamil.com',
//     diemBT1: 5,
//     diemBT2: 2,
//     diemBT3 : 10,
//     tinhDiemTB : function(){ // this ( đại diện cho object chứ function đó)

//         var diemTB = 0;
//         diemTB = ( this.diemBT1 + this.diemBT2 + this.diemBT3) /3;
//         return diemTB;
//     }


// }

// //Truy xuất đến biến trong đối tượng ( thuộc tính ) : object.key hoặc object['key'] -> ( kiểu mảng )

// console.log('Họ Tên ', hocVien.hoTen);

// // Truy xuất đến hàm trong đối tượng ( phương thức ): object.key() hoặc object['key']()

// hocVien.tinhDiemTB();

/** Bài tập : Quản lý sinh viên
 *  - Yêu cầu : xây dựng chức năng cho người dungf
 *     nhập liệu thông tin và in thông tin ra giao diện ( In thông tin : tính điểm TB và xếp loại)
 * 
 */
window.onload = function () { // Cửa sổ window bật lên thì hàm này sẽ kích hoat ( được chạy )

    // B1: Khai báo đối tượng chứa thông tin từ giao diện
    var sinhVien = {

        maSV: '',
        tenSV: '',
        loaiSV: '',
        diemToan: 0,
        diemVan: 0,
        tinhDiemTB: function () {

            var output = 0;
            output = (Number(this.diemToan) + Number(this.diemVan)) / 2;
            return output;
        },
        xepLoai: function () {

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

    document.querySelector('#xuatThongTin').onclick = function () {

        // Xác định input : Thông tin sinhVien{}
        sinhVien.maSV = document.querySelector('#maSV').value;
        sinhVien.tenSV = document.querySelector('#tenSV').value;
        sinhVien.loaiSV = document.querySelector('#loaiSV').value;
        sinhVien.diemToan = document.querySelector('#diemToan').value;
        sinhVien.diemVan = document.querySelector('#diemVan').value;

        // Kiểm tra
        console.log(sinhVien);

        // output

        document.querySelector('#txtTenSV').innerHTML = sinhVien.tenSV;
        document.querySelector('#txtMaSV').innerHTML = sinhVien.maSV;

        document.querySelector('#txtLoaiSV').innerHTML = sinhVien.loaiSV;
        // DTB
        var diemTrungBinh = sinhVien.tinhDiemTB();
        document.querySelector('#txtDTB').innerHTML = diemTrungBinh;
        // Loại Sinh Viên
        var loaiSV = sinhVien.xepLoai();
        document.querySelector('#txtXepLoai').innerHTML = loaiSV;


    }
}