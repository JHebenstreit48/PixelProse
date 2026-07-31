import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AutomationAndPython = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/EditorUtilities/AutomationAndPython';

  return (
    <>
      <PageLayout>
        <PageTitle title="Automation & Python" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomationAndPython;
