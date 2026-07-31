import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MenusAndWindows = () => {
  const markdownFilePath = 'Engines/Unity/Tools/EditorExtensibility/MenusAndWindows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Menus & Windows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MenusAndWindows;
