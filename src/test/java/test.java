//import com.example.cinema.dao.UserDAO;
//import com.example.cinema.model.SuatChieu;
//import org.junit.jupiter.api.Test;
//
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.List;
//
//public class test {
//    List<SuatChieu> list = new ArrayList<>();
//    Connection connection = null;
//    PreparedStatement pstm = null;
//    ResultSet rs = null;
////        try {
//        connection = UserDAO.getConnection();
//        String sql = "select * from suatchieu where ID_PHIM = ? and NGAY_CHIEU = ?";
//        pstm = connection.prepareStatement(sql);
//        pstm.setInt(1, idPhim);
//        pstm.setString(2, date);
//        rs = pstm.executeQuery();
//        while(rs.next()){
//            SimpleDateFormat sdf = new SimpleDateFormat("yyyyy-mm-dd");
//            SuatChieu suatChieu = new SuatChieu();
//            suatChieu.setIdSuatChieu(rs.getInt("ID_SUATCHIEU"));
//            suatChieu.setNgayChieu(sdf.parse(rs.getString("NGAY_CHIEU")));
//            suatChieu.setThoiGianBD(rs.getTime("THOI_GIAN_BD"));
//            suatChieu.setPhim(phimDAO.getPhimById(rs.getInt("ID_PHIM")));
//            suatChieu.setPhongChieu(phongChieuDAO.getPhongChieuByID(rs.getInt("ID_PHONGCHIEU")));
//            list.add(suatChieu);
//        }
//        return list;
//
//    } catch (Exception e) {
//        e.printStackTrace();
//    }finally{
//        try {
//            if(connection != null){
//                connection.close();
//            }
//            if(pstm != null){
//                pstm.close();
//            }
//            if(rs != null){
//                rs.close();
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//
//    }
//        return null;
//}
