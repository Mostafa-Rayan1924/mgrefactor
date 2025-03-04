"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { loginSlice } from "@/store/AuthSlice/loginSlice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const LoggedUserBtns = () => {
  let { user, loading } = useSelector((state: RootState) => state.loginSlice);
  let dispatch = useDispatch<AppDispatch>();

  function handleLogout() {
    dispatch(loginSlice.actions.logout());
  }
  return (
    <div>
      {user.token ? (
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="w-full bg-red-500 px-6 lg:px-8 hover:bg-red-600 text-white rounded-lg py-1">
              تسجيل الخروج
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="text-right">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-right">
                هل انت متأكد من تسجيل الخروج؟
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flex-row-reverse">
              {" "}
              {/* ✅ عكس الأزرار */}
              <AlertDialogCancel>تراجع</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                تأكيد
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Link
          className="group w-full   relative  overflow-hidden border
  border-primary px-6 lg:px-8 rounded py-1 focus:ring-3 focus:outline-hidden"
          href={`/login`}>
          <span className="absolute inset-x-0 bottom-0 h-[1px] bg-primary transition-all group-hover:h-full"></span>
          <span className="relative text-sm text-primary transition-colors group-hover:text-white">
            تسجيل الدخول
          </span>
        </Link>
      )}
    </div>
  );
};

export default LoggedUserBtns;
