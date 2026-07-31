import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
