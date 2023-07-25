using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Calculator.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public int Operand1 { get; set; }

        [BindProperty]
        public int Operand2 { get; set; }

        [BindProperty]
        public string Operator { get; set; }

        public SelectList OperatorsList = new SelectList(
        new List<SelectListItem>
        {
            new SelectListItem {Value = "", Text = "Choose an operation", Selected = true},
            new SelectListItem {Value = "+", Text = "+ (addition)"},
            new SelectListItem {Value = "-", Text = "- (subtraction)"}
        }, "Value", "Text");

        [BindProperty]
        public int Result { get; private set; }

        public void OnPost(int Operand1, int Operand2, string Operator)
        {
            switch(Operator)
            {
                case "+":
                    Result = Operand1 + Operand2;
                    break;
                case "-":
                    Result = Operand1 - Operand2;
                    break;
                default:
                    Result = 0;
                    break;
            }
        }
    }
}