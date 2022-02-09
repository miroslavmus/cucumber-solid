package uni.coolcode.services;

import uni.coolcode.models.Child;
import uni.coolcode.iservices.PointsService;

public class DefaultPointsService implements PointsService {

    @Override
    public int calculatePoints(Child child) {

        int points = 0;

        points += child.getWorkingParents();
        points += child.getHasSiblingInSameKG() ? 1 : 0;
        points += child.getHasTwin() ? 1 : 0;
        points += child.getIfDisabled() ? 2 : 0;

        return points;
    }
}
