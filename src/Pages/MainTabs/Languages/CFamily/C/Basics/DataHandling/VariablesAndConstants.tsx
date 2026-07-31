import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
