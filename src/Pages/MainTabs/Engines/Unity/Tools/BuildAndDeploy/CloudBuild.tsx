import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CloudBuild = () => {
  const markdownFilePath = 'Engines/Unity/Tools/BuildAndDeploy/CloudBuild';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Build" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudBuild;
