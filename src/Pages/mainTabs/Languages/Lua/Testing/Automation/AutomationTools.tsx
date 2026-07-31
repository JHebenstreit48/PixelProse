import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AutomationTools = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Automation/AutomationTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Automation Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomationTools;
