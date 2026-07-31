import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
