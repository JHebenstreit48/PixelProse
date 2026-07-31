import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SoftBodies = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Physics/SoftBodies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Soft Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SoftBodies;
