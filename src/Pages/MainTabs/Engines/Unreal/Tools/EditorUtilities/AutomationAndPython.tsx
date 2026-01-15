import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutomationAndPython = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/EditorUtilities/AutomationAndPython';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Automation & Python" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomationAndPython;
