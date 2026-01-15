import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditorUtilityWidgets = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/EditorUtilities/EditorUtilityWidgets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Editor Utility Widgets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorUtilityWidgets;
