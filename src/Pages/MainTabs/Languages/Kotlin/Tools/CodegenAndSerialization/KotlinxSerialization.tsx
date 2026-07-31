import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const KotlinxSerialization = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/CodegenAndSerialization/KotlinxSerialization';

  return (
    <>
      <PageLayout>
        <PageTitle title="kotlinx.serialization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KotlinxSerialization;
