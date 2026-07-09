import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
