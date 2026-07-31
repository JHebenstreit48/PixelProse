import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
