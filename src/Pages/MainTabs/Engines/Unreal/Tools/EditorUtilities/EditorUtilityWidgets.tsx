import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditorUtilityWidgets = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/EditorUtilities/EditorUtilityWidgets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Editor Utility Widgets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorUtilityWidgets;
