import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
