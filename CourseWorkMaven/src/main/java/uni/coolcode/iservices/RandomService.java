package uni.coolcode.iservices;

import java.util.ArrayList;
import java.util.Set;

public interface RandomService<T> {

    ArrayList<T> getRandomList(Set<T> t);
}
