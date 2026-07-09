import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VariablesAndConstants = () => {
  const markdownFilePath = 'Languages/CFamily/C/Basics/DataHandling/VariablesAndConstants';

  return (
    <>
      <PageLayout>
        <PageTitle title="Variables & Constants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndConstants;
