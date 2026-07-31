import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
