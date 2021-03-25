import { Inject, Injectable } from '@angular/core';
import { GentlemanStateObject } from '../models/public-api';
import { checkIfConditionMet } from '../utils/public-api';
import * as i0 from "@angular/core";
export class GentlemanStateService {
    constructor(sourceOfTruthKeys) {
        this.observerArray = [];
        sourceOfTruthKeys.forEach(k => {
            const { key, state, stateProperties } = k;
            this.createObservable(key, state, stateProperties);
        });
    }
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param observableArrayItem - ObserverArrayItem | undefined
     * @return ObserverArrayItem
     */
    static checkIfFound(observableArrayItem) {
        const condition = () => {
            return observableArrayItem;
        };
        return checkIfConditionMet(() => condition(), 'Observable item not found ! check if the key is correct and exists');
    }
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    createObservable(key, state, stateProperties) {
        const observable = new GentlemanStateObject(state, stateProperties);
        this.observerArray.push({ key, observable });
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    getObservable(key) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(obs => obs.key === key));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(obs => obs.key === key));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key) {
        const selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.find(obs => obs.key === key));
        selectedObservable === null || selectedObservable === void 0 ? void 0 : selectedObservable.observable.unsubscribe();
        this.observerArray = this.observerArray.filter(obs => obs.key !== key);
    }
}
GentlemanStateService.ɵfac = function GentlemanStateService_Factory(t) { return new (t || GentlemanStateService)(i0.ɵɵinject('sourceOfTruthKeys')); };
GentlemanStateService.ɵprov = i0.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GentlemanStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['sourceOfTruthKeys']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFxQyxNQUFNLHNCQUFzQixDQUFDO0FBRTlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUt4RCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQXlDLGlCQUEwQztRQUYzRSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFHeEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBdUQ7UUFDakYsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sbUJBQW1CLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxvRUFBb0UsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsS0FBVSxFQUFFLGVBQWdDO1FBQ3hFLE1BQU0sVUFBVSxHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsR0FBVztRQUN2QixNQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoSCxPQUFPLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEgsbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRTtJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLEdBQVc7UUFDM0IsTUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csa0JBQWtCLGFBQWxCLGtCQUFrQix1QkFBbEIsa0JBQWtCLENBQUUsVUFBVSxDQUFDLFdBQVcsR0FBRztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDOzswRkFoRVUscUJBQXFCLGNBR1osbUJBQW1COzZEQUg1QixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNO2tEQUVQLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUljLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHZW50bGVtYW5TdGF0ZU9iamVjdCwgT2JzZXJ2ZXJBcnJheUl0ZW0sIFN0YXRlUHJvcGVydGllc30gZnJvbSAnLi4vbW9kZWxzL3B1YmxpYy1hcGknO1xuaW1wb3J0IHtTb3VyY2VPZlRydXRoLCBTb3VyY2VPZlRydXRoSW5pdGlhdGV9IGZyb20gJy4uL21vZGVscy9zb3VyY2Utb2YtdHJ1dGgnO1xuaW1wb3J0IHtjaGVja0lmQ29uZGl0aW9uTWV0fSBmcm9tICcuLi91dGlscy9wdWJsaWMtYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvYnNlcnZlckFycmF5OiBTb3VyY2VPZlRydXRoID0gW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnc291cmNlT2ZUcnV0aEtleXMnKSBzb3VyY2VPZlRydXRoS2V5czogU291cmNlT2ZUcnV0aEluaXRpYXRlW10pIHtcbiAgICBzb3VyY2VPZlRydXRoS2V5cy5mb3JFYWNoKGsgPT4ge1xuICAgICAgY29uc3Qge2tleSwgc3RhdGUsIHN0YXRlUHJvcGVydGllc30gPSBrO1xuICAgICAgdGhpcy5jcmVhdGVPYnNlcnZhYmxlKGtleSwgc3RhdGUsIHN0YXRlUHJvcGVydGllcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgY2hlY2tzIGlmIHRoZSBzZWFyY2hlZCBvYmplY3QgZXhpc3RzLCBpZiBub3QgaXQgdGhyb3dzIGFuIGVycm9ycyBhbmQgc3RvcHMgdGhlIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIG9ic2VydmFibGVBcnJheUl0ZW0gLSBPYnNlcnZlckFycmF5SXRlbSB8IHVuZGVmaW5lZFxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBjaGVja0lmRm91bmQob2JzZXJ2YWJsZUFycmF5SXRlbTogT2JzZXJ2ZXJBcnJheUl0ZW08YW55PiB8IHVuZGVmaW5lZCk6IE9ic2VydmVyQXJyYXlJdGVtPGFueT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlQXJyYXlJdGVtO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksICdPYnNlcnZhYmxlIGl0ZW0gbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBjcmVhdGVzIGFuZCBvYnNlcnZhYmxlIGFuZCBhZGRzIGl0IHRvIHRoZSBvYnNlcnZhYmxlIGFycmF5LlxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHBhcmFtIHN0YXRlIC0gdGhlIHN0YXRlIG9mIHRoZSBvYnNlcnZhYmxlLCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB3aGF0IHRoZSBvYnNlcnZhYmxlIGlzIGdvaW5nIHRvIGNvbnRhaW5cbiAgICogQHBhcmFtIHN0YXRlUHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGNyZWF0ZU9ic2VydmFibGUoa2V5OiBzdHJpbmcsIHN0YXRlOiBhbnksIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBHZW50bGVtYW5TdGF0ZU9iamVjdChzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcbiAgICB0aGlzLm9ic2VydmVyQXJyYXkucHVzaCh7a2V5LCBvYnNlcnZhYmxlfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgcmV0dXJucyB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZSB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxuICAgKi9cbiAgZ2V0T2JzZXJ2YWJsZShrZXk6IHN0cmluZyk6IEdlbnRsZW1hblN0YXRlT2JqZWN0PGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKG9icyA9PiBvYnMua2V5ID09PSBrZXkpKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5SXRlbT8ub2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBlbWl0cyBhIG5ldyB2YWx1ZSBpbnRvIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcGFyYW0gZGF0YSAtIHRoZSBkYXRhIHRvIGJlIGVtaXR0ZWQgaW5zaWRlIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgZW1pdFZhbHVlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXlJdGVtID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZChvYnMgPT4gb2JzLmtleSA9PT0ga2V5KSk7XG4gICAgb2JzZXJ2YWJsZUFycmF5SXRlbT8ub2JzZXJ2YWJsZS5zZXRPYnNlcnZhYmxlVmFsdWVzKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGRlc3Ryb3lzIGFuIG9iamVjdCBmcm9tIHRoZSBvYnNlcnZhYmxlIGFycmF5LlxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBkZXN0cm95T2JzZXJ2YWJsZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT2JzZXJ2YWJsZSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQob2JzID0+IG9icy5rZXkgPT09IGtleSkpO1xuICAgIHNlbGVjdGVkT2JzZXJ2YWJsZT8ub2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub2JzZXJ2ZXJBcnJheSA9IHRoaXMub2JzZXJ2ZXJBcnJheS5maWx0ZXIob2JzID0+IG9icy5rZXkgIT09IGtleSk7XG4gIH1cbn1cbiJdfQ==