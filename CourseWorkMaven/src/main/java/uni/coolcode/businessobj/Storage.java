package uni.coolcode.businessobj;

import java.util.ArrayList;
import java.util.Collection;

public abstract class Storage<T> {

    private final Collection<T> storage;

    public Storage(Collection<T> storage) {
        this.storage = storage;
    }

    public Storage() {
        this(new ArrayList<T>());
    }

    public boolean store(T item) {
        return storage.add(item);
    }

    public boolean delete(T item) {
        return storage.remove(item);
    }

    public boolean hasItem(T item) {
        return storage.equals(item);
    }

    public boolean isEmpty() {
        return storage.isEmpty();
    }

    public int getCount() {
        return storage.size();
    }
}
