import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildProfiles = () => {
  const markdownFilePath = 'Engines/Unity/Tools/BuildAndDeploy/BuildProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildProfiles;
