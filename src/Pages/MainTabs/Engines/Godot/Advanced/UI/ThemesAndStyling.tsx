import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThemesAndStyling = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/UI/ThemesAndStyling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Themes & Styling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThemesAndStyling;
