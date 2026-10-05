# Rule: Strict Isolation of Mobile vs. Desktop Responsive Styles

1. **Isolation Rule**:
   - All mobile-specific CSS modifications must be strictly scoped inside appropriate `@media (max-width: 860px)` or smaller breakpoint blocks in `styles.css`.
   - Never alter desktop base styles ($> 860\text{px}$) when responding to mobile layout requests.
   - Desktop 2-column layouts, header navigation, hero grid split, and capability card grid MUST remain 100% intact on desktop viewports.

2. **Side-by-Side Audit Rule**:
   - Before completing any responsive task, verify that Desktop ($\ge 1024\text{px}$) and Mobile ($320\text{px} - 430\text{px}$) both render properly without layout bleed or side-effects.
