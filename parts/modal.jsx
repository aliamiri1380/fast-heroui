"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Divider
} from "@heroui/react";
import { cloneElement, useState } from "react";
import { Drawer } from 'vaul';

// export default function App({ title, content, footer, closer, onAction = () => "", actionText = "انجام", children }) {
//     const { isOpen, onOpen, onOpenChange } = useDisclosure();
//     const width = window.innerWidth

//     return (
//         width > 600 ? <>
//             {children ? cloneElement(children, { onClick: onOpen }) : ''}
//             <Modal isOpen={isOpen} backdrop="blur" >
//                 <ModalContent>
//                     {(onClose) => (
//                         <>
//                             <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
//                             <ModalBody>
//                                 {content}
//                             </ModalBody>
//                             <ModalFooter>
//                                 {footer ? footer : ''}
//                                 {closer ? <Button onPress={onClose}>بستن</Button> : ''}
//                                 <Button onPress={(e) => {onClose(e);onAction()}}>{actionText}</Button>
//                             </ModalFooter>
//                         </>
//                     )}
//                 </ModalContent>
//             </Modal>
//         </>
//         :
//             <>
//                 <Drawer.Root>
//                     <Drawer.Trigger>
//                         {children}
//                     </Drawer.Trigger>
//                     <Drawer.Portal>
//                         <Drawer.Overlay className="fixed inset-0 bg-black/40" />
//                         <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
//                             <div className="p-4 bg-white">
//                                 {content}
//                                 <Divider />
//                                 {footer ? footer : ''}
//                                 {closer ? <Button>بستن</Button> : ''}
//                                 <Button fullWidth onPress={onAction}>{actionText}</Button>
//                             </div>
//                         </Drawer.Content>
//                     </Drawer.Portal>
//                 </Drawer.Root>
//             </>
//     );
// }



export default function App({ title, content, footer, closer, onAction, actionText = "انجام", closeText='بستن', handlers = undefined, children, lgProps={}, smProps={} }) {
    const [open, setOpen] = useState(false);
    if (!handlers) {
        handlers = [open, setOpen]
    }
    const width = window.innerWidth
    const snapPoints = ['148px', '355px', 1];
    const [snap, setSnap] = useState(snapPoints[1]);


    return (
        width > 648 ? <>
            {children ? cloneElement(children, { onClick: () => handlers[1](true) }) : ''}
            <Modal isOpen={handlers[0]} onOpenChange={handlers[1]} scrollBehavior="inside" {...lgProps}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {title && <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>}
                            <ModalBody className="pb-[1pc]">
                                {content}
                            </ModalBody>
                            <ModalFooter className={`${footer || onAction || closer ? '' : 'hidden'}`}>
                                {footer ? footer : ''}
                                {onAction ? <Button color="primary" onPress={(e) => { handlers[1](false); onAction() }}>{actionText}</Button> : ''}
                                {closer ? <Button color="danger" variant="light" onPress={() => handlers[1](false)}>{closeText}</Button> : ''}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
            :
            <>
                {/* <Drawer.Root snapPoints={snapPoints} activeSnapPoint={snap} setActiveSnapPoint={setSnap}> */}
                <Drawer.Root modal shouldScaleBackground fadeFromIndex={0} open={handlers[0]} onOpenChange={handlers[1]} snapPoints={snapPoints} activeSnapPoint={snap} onClose={() => setTimeout(() => setSnap(snapPoints[1]), 500)} setActiveSnapPoint={setSnap} {...smProps}>
                    {children && <Drawer.Trigger>
                        {children}
                    </Drawer.Trigger>}
                    <Drawer.Overlay className="fixed vaul-backdrop inset-0 bg-black/40 pointer-events-none" />
                    <Drawer.Portal>
                        <Drawer.Content className="fixed pt-[1pc] pb-2 bg-white flex flex-col border border-gray-200 border-b-none rounded-t-lg bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                            <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6" />
                            <div className={`p-4`}>
                                {content}
                                <div className="pt-2"></div>
                                <div className={`flex flex-col gap-2 ${footer || onAction || closer ? '' : 'hidden'}`}>
                                    <Divider />
                                    {footer ? footer : ''}
                                    {onAction ? <Button onPress={() => { handlers[1](false); onAction() }}>{actionText}</Button> : ''}
                                    {closer ? <Button color="danger" variant="light" onPress={() => handlers[1](false)}>{closeText}</Button> : ''}
                                </div>
                            </div>
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
            </>
    );
}
