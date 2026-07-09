import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
