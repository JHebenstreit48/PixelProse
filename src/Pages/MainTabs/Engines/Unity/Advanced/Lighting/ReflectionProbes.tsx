import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ReflectionProbes = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Lighting/ReflectionProbes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reflection Probes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReflectionProbes;
