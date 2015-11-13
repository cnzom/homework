import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class test2 {


    public static void main(String[] args) {

        String[] array = new String[] {
            "a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"
        };
        //map用来保存临时数据，用来判断是否已经输出
        HashMap < Integer, String > map = new HashMap < > ();
        for (int i = 0; i < array.length; i++) {
            if (map.containsValue(array[i])) {
                //如果map里面已经存在这个值，，代表之前已经有过添加，跳出循环
                break;
            }
            for (int j = i + 1; j < array.length; j++) {
                if (array[i].equals(array[j])) {
                    if (!map.containsKey(i)) {
                        //如果map里面不存在这个key，那么添加，否则不添加
                        map.put(i, array[i]);
                        System.out.println("重复的有：" + map.get(i));
                        System.out.println("分别在：" + i);
                    }
                    map.put(j, array[j]);
                    System.out.println(j);
                }
            }
        }
    }

}
