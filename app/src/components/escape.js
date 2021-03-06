import { Controller } from "ng-harmony/ng-harmony";
import * from "ng-harmony/ng-harmony-annotate";

@Component({
	module: ng-harmony.github.io,
	selector: "todo-escape",
	restrict: "A",
	scope: {}
})
@Controller({
	module: ng-harmony.github.io,
	name: "Escape",
	deps: ["$element", "$attrs"]
})
class EscapeController extends Controller
	constructor() {
		this.ESCAPE_KEY = 27;
		this.$element.bind('keydown', function (event) {
			if (event.keyCode === this.ESCAPE_KEY) {
				this.$scope.$apply(this.$attrs.todoEscape);
			}
		});
		this.$scope.$on('$destroy', function () {
			this.$element.unbind('keydown');
		});
	}
}